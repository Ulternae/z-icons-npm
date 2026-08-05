import React from 'react';

export interface LanRectanglePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglePlusRegular(props: LanRectanglePlusRegularProps): React.ReactElement;
export default LanRectanglePlusRegular;
