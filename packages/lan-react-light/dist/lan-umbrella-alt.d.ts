import React from 'react';

export interface LanUmbrellaAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUmbrellaAlt(props: LanUmbrellaAltProps): React.ReactElement;
export default LanUmbrellaAlt;
