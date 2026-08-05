import React from 'react';

export interface LanRectangle4kRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangle4kRegular(props: LanRectangle4kRegularProps): React.ReactElement;
export default LanRectangle4kRegular;
