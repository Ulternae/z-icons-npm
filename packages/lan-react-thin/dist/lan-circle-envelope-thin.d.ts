import React from 'react';

export interface LanCircleEnvelopeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEnvelopeThin(props: LanCircleEnvelopeThinProps): React.ReactElement;
export default LanCircleEnvelopeThin;
