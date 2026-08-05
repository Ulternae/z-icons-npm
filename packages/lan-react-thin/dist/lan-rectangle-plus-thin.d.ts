import React from 'react';

export interface LanRectanglePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglePlusThin(props: LanRectanglePlusThinProps): React.ReactElement;
export default LanRectanglePlusThin;
