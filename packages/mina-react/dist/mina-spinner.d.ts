import React from 'react';

export interface MinaSpinnerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSpinner(props: MinaSpinnerProps): React.ReactElement;
export default MinaSpinner;
