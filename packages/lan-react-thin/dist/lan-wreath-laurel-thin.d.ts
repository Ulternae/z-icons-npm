import React from 'react';

export interface LanWreathLaurelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWreathLaurelThin(props: LanWreathLaurelThinProps): React.ReactElement;
export default LanWreathLaurelThin;
