import React from 'react';

export interface LanImageBrokenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageBroken(props: LanImageBrokenProps): React.ReactElement;
export default LanImageBroken;
