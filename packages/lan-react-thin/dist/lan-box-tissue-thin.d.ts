import React from 'react';

export interface LanBoxTissueThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxTissueThin(props: LanBoxTissueThinProps): React.ReactElement;
export default LanBoxTissueThin;
