import React from 'react';

export interface LanCardSpadeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardSpadeThin(props: LanCardSpadeThinProps): React.ReactElement;
export default LanCardSpadeThin;
