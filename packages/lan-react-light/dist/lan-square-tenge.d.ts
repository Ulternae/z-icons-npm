import React from 'react';

export interface LanSquareTengeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTenge(props: LanSquareTengeProps): React.ReactElement;
export default LanSquareTenge;
