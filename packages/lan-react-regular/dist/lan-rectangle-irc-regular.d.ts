import React from 'react';

export interface LanRectangleIrcRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleIrcRegular(props: LanRectangleIrcRegularProps): React.ReactElement;
export default LanRectangleIrcRegular;
