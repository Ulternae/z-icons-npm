import React from 'react';

export interface LanTypewriterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTypewriterRegular(props: LanTypewriterRegularProps): React.ReactElement;
export default LanTypewriterRegular;
