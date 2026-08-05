import React from 'react';

export interface LanCheckCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckCircleThin(props: LanCheckCircleThinProps): React.ReactElement;
export default LanCheckCircleThin;
