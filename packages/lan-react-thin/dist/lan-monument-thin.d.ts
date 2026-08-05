import React from 'react';

export interface LanMonumentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMonumentThin(props: LanMonumentThinProps): React.ReactElement;
export default LanMonumentThin;
