import React from 'react';

export interface LanSquareLariProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLari(props: LanSquareLariProps): React.ReactElement;
export default LanSquareLari;
