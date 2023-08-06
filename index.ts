import { interval, of, concat } from 'rxjs';

// when source never completes, any subsequent observables never run
concat(interval(2000), of('This', 'Never', 'Runs')).subscribe(console.log);

// log: 1,2,3,4.....
