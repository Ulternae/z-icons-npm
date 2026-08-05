import React from 'react';

export interface LanRemoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRemoteThin(props: LanRemoteThinProps): React.ReactElement;
export default LanRemoteThin;
