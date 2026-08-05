import React from 'react';

export interface LanSignatureThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignatureThin(props: LanSignatureThinProps): React.ReactElement;
export default LanSignatureThin;
