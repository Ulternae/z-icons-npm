import React from 'react';

export interface LanTricycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTricycleThin(props: LanTricycleThinProps): React.ReactElement;
export default LanTricycleThin;
