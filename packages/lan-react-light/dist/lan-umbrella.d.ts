import React from 'react';

export interface LanUmbrellaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUmbrella(props: LanUmbrellaProps): React.ReactElement;
export default LanUmbrella;
