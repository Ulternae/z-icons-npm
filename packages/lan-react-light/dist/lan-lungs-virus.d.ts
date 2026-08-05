import React from 'react';

export interface LanLungsVirusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLungsVirus(props: LanLungsVirusProps): React.ReactElement;
export default LanLungsVirus;
