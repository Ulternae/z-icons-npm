import React from 'react';

export interface LanSectionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSection(props: LanSectionProps): React.ReactElement;
export default LanSection;
