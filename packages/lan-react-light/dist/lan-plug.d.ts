import React from 'react';

export interface LanPlugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlug(props: LanPlugProps): React.ReactElement;
export default LanPlug;
