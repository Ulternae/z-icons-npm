import React from 'react';

export interface LanObjectGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectGroup(props: LanObjectGroupProps): React.ReactElement;
export default LanObjectGroup;
