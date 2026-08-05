import React from 'react';

export interface LanRectangleBetaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleBeta(props: LanRectangleBetaProps): React.ReactElement;
export default LanRectangleBeta;
