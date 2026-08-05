import React from 'react';

export interface LanRadioAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadioAlt(props: LanRadioAltProps): React.ReactElement;
export default LanRadioAlt;
