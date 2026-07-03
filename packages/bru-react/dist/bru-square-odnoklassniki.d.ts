import React from 'react';

export interface BruSquareOdnoklassnikiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareOdnoklassniki(props: BruSquareOdnoklassnikiProps): React.ReactElement;
export default BruSquareOdnoklassniki;
