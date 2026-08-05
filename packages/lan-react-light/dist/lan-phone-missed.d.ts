import React from 'react';

export interface LanPhoneMissedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneMissed(props: LanPhoneMissedProps): React.ReactElement;
export default LanPhoneMissed;
