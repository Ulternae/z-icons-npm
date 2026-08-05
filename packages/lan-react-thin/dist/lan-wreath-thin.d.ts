import React from 'react';

export interface LanWreathThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWreathThin(props: LanWreathThinProps): React.ReactElement;
export default LanWreathThin;
