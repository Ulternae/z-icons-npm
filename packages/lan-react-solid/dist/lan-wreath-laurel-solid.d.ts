import React from 'react';

export interface LanWreathLaurelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWreathLaurelSolid(props: LanWreathLaurelSolidProps): React.ReactElement;
export default LanWreathLaurelSolid;
