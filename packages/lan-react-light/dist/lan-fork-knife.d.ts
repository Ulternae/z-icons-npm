import React from 'react';

export interface LanForkKnifeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForkKnife(props: LanForkKnifeProps): React.ReactElement;
export default LanForkKnife;
