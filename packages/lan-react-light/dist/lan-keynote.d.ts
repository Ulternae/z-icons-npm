import React from 'react';

export interface LanKeynoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeynote(props: LanKeynoteProps): React.ReactElement;
export default LanKeynote;
