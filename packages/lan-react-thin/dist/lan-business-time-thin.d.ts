import React from 'react';

export interface LanBusinessTimeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusinessTimeThin(props: LanBusinessTimeThinProps): React.ReactElement;
export default LanBusinessTimeThin;
