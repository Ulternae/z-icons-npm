import React from 'react';

export interface LanPageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPage(props: LanPageProps): React.ReactElement;
export default LanPage;
