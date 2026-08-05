import React from 'react';

export interface LanUmbrellaBeachSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUmbrellaBeachSolid(props: LanUmbrellaBeachSolidProps): React.ReactElement;
export default LanUmbrellaBeachSolid;
