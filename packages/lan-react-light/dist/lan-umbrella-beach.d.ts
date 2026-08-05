import React from 'react';

export interface LanUmbrellaBeachProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUmbrellaBeach(props: LanUmbrellaBeachProps): React.ReactElement;
export default LanUmbrellaBeach;
