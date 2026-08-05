import React from 'react';

export interface LanOverlineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOverlineThin(props: LanOverlineThinProps): React.ReactElement;
export default LanOverlineThin;
