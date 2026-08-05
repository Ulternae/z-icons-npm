import React from 'react';

export interface LanSwordsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwords(props: LanSwordsProps): React.ReactElement;
export default LanSwords;
