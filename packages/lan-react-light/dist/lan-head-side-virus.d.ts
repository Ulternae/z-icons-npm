import React from 'react';

export interface LanHeadSideVirusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideVirus(props: LanHeadSideVirusProps): React.ReactElement;
export default LanHeadSideVirus;
