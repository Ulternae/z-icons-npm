import React from 'react';

export interface LanPollPeopleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPollPeopleThin(props: LanPollPeopleThinProps): React.ReactElement;
export default LanPollPeopleThin;
