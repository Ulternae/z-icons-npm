import React from 'react';

export interface LanAccentGraveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAccentGrave(props: LanAccentGraveProps): React.ReactElement;
export default LanAccentGrave;
