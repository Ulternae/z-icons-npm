import React from 'react';

export interface LanMegaphoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMegaphoneThin(props: LanMegaphoneThinProps): React.ReactElement;
export default LanMegaphoneThin;
