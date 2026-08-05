import React from 'react';

export interface LanPersonLimbsWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonLimbsWide(props: LanPersonLimbsWideProps): React.ReactElement;
export default LanPersonLimbsWide;
