import React from 'react';

export interface LanToiletPaperUnderSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPaperUnderSlash(props: LanToiletPaperUnderSlashProps): React.ReactElement;
export default LanToiletPaperUnderSlash;
