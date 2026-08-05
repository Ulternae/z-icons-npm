import React from 'react';

export interface LanSaxophoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSaxophoneThin(props: LanSaxophoneThinProps): React.ReactElement;
export default LanSaxophoneThin;
