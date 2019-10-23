import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Modal } from './modal/modal';
import { map, catchError } from 'rxjs/operators';
import { LoadingService } from './loading/loading.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
    public loading: boolean = false;
    constructor(private modal: Modal, private route: Router, public loader: LoadingService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //const currentUser = sessionStorage.getItem('currentUser');
        const currentUser = "0skgoks0kso8os8os88skg0s0kcgso48oow48kck";
        //if (currentUser) {
          //  console.log("blz");
            /*req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + currentUser
                }
            });
               */
        //}

        //console.log(req);

        if (req instanceof HttpErrorResponse) {
            this.loader.hide();
            catchError((err: HttpErrorResponse) => {
                console.log('Erro:');
                console.log(err);
                return throwError(err.message);
            });
        }

        return next.handle(req).pipe(map(
            (data) => {
                if (data.type === HttpEventType.Sent) {
                    console.log('iniciou');
                    
                }

                if (data.type === HttpEventType.Response) {
                    console.log('respondeu');
                   
                }

                return data;
            }
        ),catchError((err: HttpErrorResponse) => {
            alert('Erro ao efeuar a operação. \nDetalhes do Erro:' + err.message);
            console.log(err);
            this.loader.hide();
            return throwError(err.message);
        }));
    }
}
