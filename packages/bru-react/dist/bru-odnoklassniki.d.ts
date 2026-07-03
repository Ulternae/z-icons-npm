import React from 'react';

export interface BruOdnoklassnikiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOdnoklassniki(props: BruOdnoklassnikiProps): React.ReactElement;
export default BruOdnoklassniki;
