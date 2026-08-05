import React from 'react';

export interface LanWreathLaurelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWreathLaurel(props: LanWreathLaurelProps): React.ReactElement;
export default LanWreathLaurel;
