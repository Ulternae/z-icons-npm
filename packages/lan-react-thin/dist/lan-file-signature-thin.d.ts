import React from 'react';

export interface LanFileSignatureThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSignatureThin(props: LanFileSignatureThinProps): React.ReactElement;
export default LanFileSignatureThin;
