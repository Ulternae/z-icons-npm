import React from 'react';

export interface LanEnvelopeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeThin(props: LanEnvelopeThinProps): React.ReactElement;
export default LanEnvelopeThin;
