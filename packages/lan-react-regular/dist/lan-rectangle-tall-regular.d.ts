import React from 'react';

export interface LanRectangleTallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleTallRegular(props: LanRectangleTallRegularProps): React.ReactElement;
export default LanRectangleTallRegular;
