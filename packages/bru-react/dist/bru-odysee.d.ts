import React from 'react';

export interface BruOdyseeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOdysee(props: BruOdyseeProps): React.ReactElement;
export default BruOdysee;
