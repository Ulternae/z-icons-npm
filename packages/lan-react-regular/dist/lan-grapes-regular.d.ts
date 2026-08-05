import React from 'react';

export interface LanGrapesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrapesRegular(props: LanGrapesRegularProps): React.ReactElement;
export default LanGrapesRegular;
