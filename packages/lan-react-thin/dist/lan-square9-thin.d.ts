import React from 'react';

export interface LanSquare9ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare9Thin(props: LanSquare9ThinProps): React.ReactElement;
export default LanSquare9Thin;
